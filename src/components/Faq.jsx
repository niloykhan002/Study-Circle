const Faq = () => {
  return (
    <div className="container mx-auto my-20 space-y-5 px-4">
      <h1 className="text-4xl text-center font-bold my-12">
        FA<span className="text-primary">Q</span>
      </h1>
      <div className="collapse collapse-plus bg-base-100 border">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is Study Circle? What is it for and what can I do here?
        </div>
        <div className="collapse-content">
          <p>
            Study Circle is a study community and a virtual study space that you
            can access 24/7 from anywhere. When part of our community you will
            be able to study live with other students from anywhere.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Do I need to study a specific subject or go to a specific school?
        </div>
        <div className="collapse-content">
          <p>
            No, you decide what and how long you want to study - as long as we
            are together. It also doesn’t matter whether you are in high school,
            college or university. You can choose to study in general rooms, in
            pre-university or university rooms, and on subject-specific
            channels.{" "}
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          I would like to join. How do I do that?
        </div>
        <div className="collapse-content">
          <p>
            Perfect, you are welcome in the community! Great that you are giving
            it a shot. We currently offer study rooms accessed directly from our
            website using Zoom and also a Discord Server with different study
            channels.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Are there any regular events or rooms for group discussions, etc?
        </div>
        <div className="collapse-content">
          <p>
            Yes! By being part of the community you will have access to a
            variety of events, from mindfulness sessions to study tips
            bootcamps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
