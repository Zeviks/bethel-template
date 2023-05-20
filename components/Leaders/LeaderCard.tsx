"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const LeaderCard = () => {
  return (
    <div className="h-[320px] w-[270px] ">
      <img
        className="h-full w-full object-cover shadow-sm shadow-blue-gray-900/50"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <div className="pt-3">
        <h3 className="font-medium">REV. RICK REYES</h3>
        <p className="font-light text-primary">LEAD PASTOR</p>
      </div>
    </div>
  );
};

export default LeaderCard;
