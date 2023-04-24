import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQuality } = useQualities();
    if (!isLoading) {
        return (
            <>
                {qualities.map((qual) => (
                    <Quality key={qual} {...getQuality(qual)} />
                ))}
            </>
        );
    } else return "Loading...";
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
