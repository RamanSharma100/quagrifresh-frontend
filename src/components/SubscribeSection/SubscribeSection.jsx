const SubscribeSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="aa-subscribe">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-subscribe-area">
              <h3>Subscribe our newsletter </h3>
              <p>For latest news, discount & offers. Please Subscribe!</p>
              <form onSubmit={handleSubmit} className="aa-subscribe-form">
                <input type="email" placeholder="Enter your Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
