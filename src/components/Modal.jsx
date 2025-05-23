import {createPortal} from "react-dom";
import {forwardRef,useImperativeHandle,useRef} from "react";
import Button from "./Button.jsx";

const Modal = forwardRef ((props,ref) => {
    const {children,buttonCaption} = props;
    const dialog = useRef(null);

    useImperativeHandle(ref, () =>{
        return{
          open() {
              dialog.current.showModal();
          }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method={dialog} className="mt-4 text-right">
            <Button type="button" onClick={() => dialog.current.close()}>{buttonCaption}</Button>
        </form>
    </dialog>,document.getElementById("modal-root"));
});

export default Modal;