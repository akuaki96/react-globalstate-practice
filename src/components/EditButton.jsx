import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

const onClickEdit = () => {
  alert("編集画面を表示します");
};

export const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext);

  return (
    <button onClick={onClickEdit} style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
