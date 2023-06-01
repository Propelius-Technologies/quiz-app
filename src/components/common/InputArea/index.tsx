import { isServer } from "@/src/constant";
import useStore from "@/src/zustand-store";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import "./inputAreaStyles.module.css";

export interface inputAreaProps {
  onChangeHandler: (value: any) => void;
  getSelectedAns: string | undefined;
}

const InputArea = ({ onChangeHandler, getSelectedAns }: inputAreaProps) => {
  return (
    <>
      {!isServer && (
        <ReactQuill
          value={getSelectedAns}
          //   onChange={onChange}
          //   className={styles.customEditor}
          onChange={onChangeHandler}
          style={{ height: "80%" }}
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
              ["clean"],
            ],
          }}
        />
      )}
    </>
  );
};

export default InputArea;
