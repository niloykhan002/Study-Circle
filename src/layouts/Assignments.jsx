import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const Assignments = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [query, setQuery] = useState("All");

  useEffect(() => {
    axios
      .get(
        `https://study-circle-server-five.vercel.app/assignments?filter=${query}`
      )
      .then((res) => {
        setAssignments(res.data);
      });
  }, [query]);

  const handleDelete = (id, email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (user.email !== email) {
          return Swal.fire({
            title: "Error!",
            text: "You Cannot Delete This!",
            icon: "error",
          });
        }
        fetch(`https://study-circle-server-five.vercel.app/assignments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Campaign has been deleted.",
                icon: "success",
              });
              const remaining = assignments.filter(
                (assignment) => assignment._id !== id
              );
              setAssignments(remaining);
            }
          });
      }
    });
  };

  const handleFilter = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-center text-4xl font-bold mb-12">
        All <span className="text-primary">Assignments</span>
      </h1>
      <div className="flex justify-end mr-4">
        <label className="form-control w-fit my-12">
          <div className="label">
            <span className="label-text">Filter</span>
          </div>
          <select
            onChange={handleFilter}
            className="select select-bordered"
            name="difficulty"
          >
            <option defaultChecked>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Assignment Difficulty</th>
              <th>Deadline</th>
              <th className="md:text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {assignments.map((assignment, index) => (
              <tr key={assignment._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-lg h-12 w-12">
                        <img src={assignment.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{assignment.title}</div>
                    </div>
                  </div>
                </td>
                <td>{assignment.difficulty}</td>
                <td>{assignment.date}</td>
                <th className="flex md:justify-end gap-4">
                  <div className="flex items-center  gap-1">
                    <div className="flex items-center gap-1">
                      <Link
                        to={`/assignments/${assignment._id}`}
                        className="btn btn-neutral btn-xs"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() =>
                          handleDelete(assignment._id, assignment.email)
                        }
                        className="btn bg-primary text-white btn-xs"
                      >
                        Delete
                      </button>
                    </div>
                    <Link
                      to={`/assignment-details/${assignment._id}`}
                      className="btn btn-neutral btn-xs"
                    >
                      View More
                    </Link>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
