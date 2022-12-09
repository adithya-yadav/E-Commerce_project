import { Fragment } from 'react';
import ReactDOM from 'react-dom'
const ModelOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  
function Modal (){
    return (
        <Fragment>
        {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
        </Fragment>
    )
}