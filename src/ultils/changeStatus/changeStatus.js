export const toggleOnlineStatus = (setStatus) => {
    setStatus(prevStatus => ({
        ...prevStatus,
        online: !prevStatus.online,
    }));
};