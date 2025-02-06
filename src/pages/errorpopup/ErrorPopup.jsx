import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ErrorPopup(props) {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Error</DialogHeader>
        <DialogBody style={{ fontFamily: "serif", fontSize: "20px" }}>
          {props.message}
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Ok</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
