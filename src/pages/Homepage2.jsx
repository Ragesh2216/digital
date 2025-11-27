import React from "react";
import { Link } from "react-router-dom";
import ExploreServices from "../components/ExploreServices";
import InventoryOptimization from "../components/InventoryOptimization";
import Latest from "../pages/Latest";

const Homepage2 = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Remove pt-16 from here since ExploreServices already has it */}
            <ExploreServices />
            <InventoryOptimization/>
            <Latest/>
        </div>
    );
};

export default Homepage2;