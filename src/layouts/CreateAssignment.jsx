import toast, { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateAssignment = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = parseInt(form.marks.value);
    const image = form.image.value;
    const difficulty = form.difficulty.value;
    const date = form.date.value;
    const email = user.email;

    const assignment = {
      title,
      description,
      marks,
      image,
      difficulty,
      date,
      email,
    };

    axios.post("http://localhost:5000/assignments", assignment).then((res) => {
      console.log(res);
      toast.success("Assignment Added Successfully");
      form.reset();
    });
  };
  return (
    <div className="my-12 bg-base-200 p-24 rounded-lg mx-4">
      <Toaster />
      <h2 className="text-center text-4xl font-bold">
        Create <span className="text-primary">Assignment</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            name="title"
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
            placeholder="Image URL"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Difficulty Level</span>
          </div>
          <select className="select select-bordered" name="difficulty">
            <option defaultChecked>Easy</option>
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment;
