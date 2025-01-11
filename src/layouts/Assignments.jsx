import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Assignments = () => {
  const { user } = useAuth();
  const data = useLoaderData();
  const [assignments, setAssignments] = useState(data);

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
        fetch(`http://localhost:5000/assignments/${id}`, {
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
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-center text-4xl font-bold mb-12">
        All <span className="text-primary">Assignments</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Assignment Difficulty</th>
              <th>Deadline</th>
              <th>Action</th>
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
                <th className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                      <Link
                        to={`/updateCampaign/${assignment._id}`}
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
                    <button className="btn btn-neutral btn-xs">
                      View More
                    </button>
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
