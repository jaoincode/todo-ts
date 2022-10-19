import moment from "moment";
import X from "../assets/x.png";
import { completeTodo } from "../services/todos";
import { TodoProps } from "../types/Todo";

function Todo({ todo, _id, createdAt }: TodoProps) {
  const handleComplete = async () => {
    const confirmComplete = confirm("Are you sure you want to complete?");
    if (confirmComplete) {
      await completeTodo(_id);
      window.location.reload();
    }
  };

  const formateDate = (date: Date) => {
    const momentObj = moment(date);
    return momentObj.format("YYYY/MM/DD");
  };

  return (
    <div className="todo">
      <div>
        <p>{todo}</p>
        <span>{formateDate(createdAt)}</span>
      </div>
      <button onClick={handleComplete}>
        <img src={X} alt="Complete" />
      </button>
    </div>
  );
}

export default Todo;
