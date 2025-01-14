import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const MyAttemptedAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/my-submission?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setAssignments(res.data);
      });
  }, [user.email]);
  return (
    <div className="container mx-auto my-20">
      <div className="overflow-x-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Assignments</span>
        </h1>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Status</th>
              <th>Marks</th>
              <th>Obtained Marks</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {assignments.map((assignment, index) => (
              <tr key={assignment._id}>
                <th>{index + 1}</th>
                <td>{assignment.title}</td>
                <td>{assignment.status}</td>
                <td>{assignment.marks}</td>
                <td>
                  {assignment.status === "Pending"
                    ? "Under Review"
                    : assignment.given_mark}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAttemptedAssignments;
