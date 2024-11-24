import React from "react";

const Contact = () => {
  return (
    <section className="md:min-h-screen">
      <div className="px-4 py-8 md:py-2 m-auto max-w-screen-md">
        <h2 style={{color:"black"}} className="heading text-center ">Связаться с нами</h2>
        <p className="mb-16 lg:mb-10 font-light text-center paragraph">
        Есть какие-либо проблемы? Хотите связаться с нами? Дайте нам знать.

        </p>

        <form action="#" className="space-y-4">
          <div>
            <label htmlFor="email" className="form_label">
              Ваш email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Проблема
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Дайте нам знать, как мы можем вам помочь?"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="form_label">
              Ваше сообщения
            </label>
            <textarea
              type="text"
              id="message"
              rows="2"
              placeholder="Оставить сообщения"
              className="form_input mt-1"
            ></textarea>
          </div>

          <button className="btn w-full my-4">Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
