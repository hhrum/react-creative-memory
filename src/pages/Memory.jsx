import React from "react";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {MemoryBoard} from "../components/Memory/MemoryBoard";
import './Memory.css';
import {MemoryTimer} from "../components/Memory/MemoryTimer";

export const Memory = () => {

  return (
    <DefaultLayout>
      <div className="memory">
        <MemoryTimer/>
        <MemoryBoard/>
      </div>
    </DefaultLayout>
  );
};
