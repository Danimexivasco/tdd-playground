import {createRoot} from "react-dom/client";
import React from "react";
import { Calculator } from "./components/Calculator";
import { ItemsList } from "./components/ItemsList";

createRoot(document.getElementById("root")).render(<ItemsList />);