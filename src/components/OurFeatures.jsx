import img1 from "../assets/features.jpg";
const OurFeatures = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl font-bold my-20">
        Our <span className="text-primary">Features</span>
      </h2>
      <div>
        <div className="hero-content max-w-none flex-col lg:justify-between  lg:flex-row-reverse lg:items-end gap-10">
          <img
            data-aos="flip-right"
            src={img1}
            className="max-w-lg h-96 object-cover object-right-bottom rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Understand The Impact <br /> Of Join Our Community
            </h1>
            <p className="text-primary font-bold text-lg mt-6 mb-4">
              Connect with a Global Student Community
            </p>
            <p className=" text-justify">
              When you join StudyCircle, you become part of a vibrant global
              student community. Here, learners from diverse backgrounds
              connect, chat, and collaborate, fostering a strong sense of
              belonging. By joining study groups, participating in community
              events, and tracking progress through leaderboards, students gain
              motivation and valuable social interactions. This communal
              approach encourages collaboration, where ideas are exchanged,
              study goals are set, and achievements are celebrated alongside
              peers from around the world. This sense of shared purpose and
              camaraderie is a cornerstone of the CSW experience, distinguishing
              it from other platforms that may not emphasize global connection
              and community as strongly.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg text-primary font-bold mb-5">
          Focused Goal Setting and Achievement
        </h2>

        <p className="text-justify">
          Success starts with setting clear, actionable goals, and at
          StudyCircle, we emphasize the importance of defining and pursuing
          these goals within a supportive environment. Our platform offers
          advanced progress tracking and peer guidance, empowering you to stay
          focused and driven toward your objectives. StudyCircle achievement and
          progress tracking features allow students to visualize their growth
          and celebrate milestones, fostering a rewarding and motivating study
          experience. With the support of peers and a strong community focus,
          students find accountability, shared insights, and valuable guidance
          that help them achieve their academic aspirations.
        </p>
      </div>
    </div>
  );
};

export default OurFeatures;
