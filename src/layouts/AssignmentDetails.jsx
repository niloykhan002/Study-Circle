import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const AssignmentDetails = () => {
  const { user } = useAuth();
  const assignment = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const googleDoc = form.doc.value;
    const quickNote = form.note.value;
    const email = user.email;
    const name = user.displayName;
    const status = "Pending";
    const assignment_id = assignment._id;

    const submission = {
      googleDoc,
      quickNote,
      email,
      name,
      status,
      assignment_id,
    };

    axios
      .post("http://localhost:5000/assignment-submission", submission)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged === true) {
          toast.success("Assignment submitted successfully");
          setIsModalOpen(false);
        }
      });
  };
  return (
    <div className="my-12">
      <Toaster />
      <div className="grid lg:grid-cols-3 grid-cols-1 card-side bg-base-100 w-3/4 mx-auto border p-8 rounded-2xl">
        <figure>
          <img
            className="h-full w-full lg:col-span-1 rounded-2xl"
            src={assignment.image}
            alt=""
          />
        </figure>
        <div className="card-body lg:col-span-2">
          <h2 className="card-title">{assignment.title}</h2>
          <p>
            <span className="font-bold">Deadline:</span> {assignment.date}
          </p>
          <p>
            <span className="font-bold">Description:</span>{" "}
            {assignment.description}
          </p>
          <p>
            <span className="font-bold">Assignment Marks:</span>{" "}
            {assignment.marks}
          </p>
          <p>
            <span className="font-bold">Difficulty:</span>{" "}
            {assignment.difficulty}
          </p>
          <div>
            <button
              className="btn bg-primary text-white"
              onClick={() => setIsModalOpen(true)}
            >
              Take Assignment
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div className="modal modal-open">
                <div className="modal-box">
                  <h2 className="font-bold text-lg">Submit Your Assignment</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Google docs link</span>
                      </label>
                      <input
                        type="text"
                        name="doc"
                        className="input input-bordered"
                        placeholder="Enter google docs link"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quick Note</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered h-24"
                        name="note"
                        placeholder="Quick note"
                        required
                      ></textarea>
                    </div>
                    <div className="modal-action">
                      <button
                        type="submit"
                        className="btn btn-success text-white"
                      >
                        Submit
                      </button>

                      <button
                        type="button"
                        className="btn btn-error text-white"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
