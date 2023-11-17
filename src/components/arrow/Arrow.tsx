import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { PubSub } from "aws-amplify";
import React from "react";

interface ArrowProps {
  direction: "up" | "down" | "left" | "right";
  id: string;
}

export const Arrow = (props: ArrowProps) => {
  const onButtonPress = () => {
    console.log(`click on ${props.direction} arrow`);
    PubSub.publish("robot/jetbot1/command", { direction: props.direction, enabled: true })
      .catch(console.error);
  };

  const onButtonRelease = () => {
    console.log(`release on ${props.direction} arrow`);
    PubSub.publish("robot/jetbot1/command", { direction: props.direction, enabled: false })
      .catch(console.error);
  };
  const disableContext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  let arrow = faArrowUp;
  switch (props.direction) {
    case "up":
      arrow = faArrowUp;
      break;
    case "down":
      arrow = faArrowDown;
      break;
    case "left":
      arrow = faArrowLeft;
      break;
    case "right":
      arrow = faArrowRight;
      break;
  }
  return (
    <>
      <div
        id={props.id}
        className="p-4 rounded-lg border-4 bg-cyan-500 border-cyan-800 hover:bg-cyan-600 hover:cursor-pointer active:bg-cyan-800 select-none touch-none"
        onPointerDown={onButtonPress}
        onPointerUp={onButtonRelease}
        onContextMenu={disableContext}
      >
        <FontAwesomeIcon
          icon={arrow}
          className="w-full h-full text-gray-100"
        />
      </div>
    </>
  );
};

export default Arrow;
