import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const PendingAssignments = () => {
  const assignments = useLoaderData();
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedAssignment, setClickedAssignment] = useState({});

  const handleClicked = (id) => {
    const currentAssignment = assignments.find(
      (assignment) => assignment._id === id
    );
    setClickedAssignment(currentAssignment);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const given_mark = parseInt(form.given_mark.value);
    const feedback = form.feedback.value;
    const status = "Completed";

    const doc = {
      given_mark,
      feedback,
      status,
    };

    if (clickedAssignment.email === user.email) {
      return toast.error("You can't give marks");
    }

    axios
      .patch(
        `http://localhost:5000/assignment-submission/${clickedAssignment._id}`,
        doc
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Assignment marks given");
        }
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error", error);
        toast.error(error);
      });
  };

  return (
    <div className="container mx-auto my-20">
      <Toaster />
      <div className="overflow-x-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Pending <span className="text-primary">Assignments</span>
        </h1>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Marks</th>
              <th>Examinee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {assignments.map((assignment, index) => (
              <tr key={assignment._id}>
                <th>{index + 1}</th>
                <td>{assignment.title}</td>
                <td>{assignment.marks}</td>
                <td>{assignment.name}</td>
                <td>
                  <button
                    className="btn btn-neutral btn-xs"
                    onClick={() => handleClicked(assignment._id)}
                  >
                    Give Mark
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal */}
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="font-bold text-lg">Assignment Submission</h2>
              <div className="space-y-4 mt-4">
                <p>
                  <span className="font-bold">Google Docs :</span>{" "}
                  <a
                    href={clickedAssignment.googleDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {clickedAssignment.googleDoc}
                  </a>
                </p>
                <p>
                  <span className="font-bold">Notes :</span>{" "}
                  {clickedAssignment.quickNote}
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mark</span>
                  </label>
                  <input
                    type="number"
                    name="given_mark"
                    className="input input-bordered"
                    placeholder="Give mark"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Feedback</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    name="feedback"
                    placeholder="Write Feedback"
                    required
                  ></textarea>
                </div>
                <div className="modal-action">
                  <button type="submit" className="btn btn-success text-white">
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
  );
};

export default PendingAssignments;
