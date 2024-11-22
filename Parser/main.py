import requests
from bs4 import BeautifulSoup

# Функция для извлечения данных из карточек
def extract_data_from_page(url):
    # Загружаем HTML страницы
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Список для хранения извлеченных данных
    data = []
    
    # Ищем карточки
    cards = soup.find_all('li', class_='minicard-item')
    for card in cards:
        item = {}
        
        # Извлекаем текст из title-link js-item-url
        title_tag = card.find('a', class_='title-link js-item-url')
        item['title'] = title_tag.text.strip() if title_tag else None
        
        # Извлекаем текст из minicard-item__features
        features_tag = card.find('span', class_='minicard-item__features')
        item['features'] = features_tag.text.strip() if features_tag else None
        
        # Извлекаем рейтинг из z-stars z-stars--12
        rating_tag = card.find('div', class_='z-text--bold')
        item['rating'] = rating_tag.text.strip() if rating_tag else None
        
        # Извлекаем текст из comments
        comments_tag = card.find('div', class_='comments')
        item['comments'] = comments_tag.text.strip() if comments_tag else None
        
        # Извлекаем текст из address
        address_tag = card.find('span', class_='address')
        item['address'] = address_tag.text.strip() if address_tag else None
        
        # Добавляем объект в общий список
        data.append(item)
    
    return data

# Основная функция
def main():
    urls = [
        "https://zoon.ru/yakutsk/holiday_house/type/baza_otdyha/page-1/",
        "https://zoon.ru/yakutsk/holiday_house/type/baza_otdyha/page-2/"
    ]
    
    all_data = []
    for url in urls:
        data = extract_data_from_page(url)
        all_data.extend(data)
    
    # Вывод данных
    for idx, item in enumerate(all_data, 1):
        print(f"Карточка {idx}:")
        print(f"Название: {item['title']}")
        print(f"Особенности: {item['features']}")
        print(f"Рейтинг: {item['rating']}")
        print(f"Комментарии: {item['comments']}")
        print(f"Адрес: {item['address']}")
        print("-" * 40)

if __name__ == "__main__":
    main()
