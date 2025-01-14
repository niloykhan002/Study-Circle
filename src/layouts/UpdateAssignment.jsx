import DatePicker from "react-datepicker";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date(assignment.date));

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = parseInt(form.marks.value);
    const image = form.image.value;
    const difficulty = form.difficulty.value;
    const date = form.date.value;
    const email = assignment.email;

    const updateDoc = {
      title,
      description,
      marks,
      image,
      difficulty,
      date,
      email,
    };

    if (assignment.email !== user.email) {
      return toast.error("You cannot update this!");
    }
    axios
      .put(
        `https://study-circle-server-five.vercel.app/assignments/${assignment._id}`,
        updateDoc
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Assignment Updated Successfully");
          setTimeout(() => {
            navigate("/assignments");
          }, 1000);
        }
      });
  };
  return (
    <div className="my-12 bg-base-200 p-24 rounded-lg mx-4">
      <Toaster />
      <h2 className="text-center text-4xl font-bold">
        Update <span className="text-primary">Assignment</span>
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            name="title"
            defaultValue={assignment.title}
            placeholder="Title"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            name="description"
            defaultValue={assignment.description}
            placeholder="Description"
            required
          ></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-tex">Marks</span>
          </div>
          <input
            type="number"
            name="marks"
            defaultValue={assignment.marks}
            placeholder="Marks"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Image URL</span>
          </div>
          <input
            type="text"
            name="image"
            defaultValue={assignment.image}
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Difficulty Level</span>
          </div>
          <select
            className="select select-bordered"
            name="difficulty"
            defaultValue={assignment.difficulty}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Due Date</span>
          </div>
          <DatePicker
            className="input input-bordered w-full"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat={"yyyy/MM/dd"}
            name="date"
          />
        </label>

        <button className="btn btn-block bg-primary text-white font-bold">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateAssignment;
