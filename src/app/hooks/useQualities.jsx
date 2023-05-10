import React, { useContext, useEffect, useState } from "react";
import qualityService from "../../service/quality.service";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const QualitiesContex = React.createContext();
export const useQualities = () => {
    return useContext(QualitiesContex);
};

export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);
    useEffect(() => {
        const getQualities = async () => {
            try {
                const { content } = await qualityService.fetchAll();
                setQualities(content);
                setLoading(false);
            } catch (error) {
                errorCatcher(error);
            };
        };
        getQualities();
    }, []);
    const getQuality = (id) => {
        return qualities.find((q) => q._id === id);
    };

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    return (
        <QualitiesContex.Provider value={ { qualities, isLoading, getQuality } }>
            {!isLoading ? children : <h1>Loading...</h1>}
        </QualitiesContex.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
