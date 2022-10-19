import moment from "moment";
import X from "../assets/x.png";
import { completeTodo } from "../services/todos";

type Props = {
  todoText: string;
  id: string;
  createdAt: Date;
};

function Todo({ todoText, id, createdAt }: Props) {
  const handleComplete = async () => {
    const confirmComplete = confirm("Are you sure you want to complete?");
    if (confirmComplete) {
      await completeTodo(id);
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
        <p>{todoText}</p>
        <span>{formateDate(createdAt)}</span>
      </div>
      <button onClick={handleComplete}>
        <img src={X} alt="Complete" />
      </button>
    </div>
  );
}

export default Todo;
