const adminMiddleware = async (req, res, next) => {
    try {
        // console.log(req.userData); // adminMiddleware can easily access req.user because it is executed after authMiddleware and req.user is available there.
        const adminRole = req.userData.isAdmin;
        if (!adminRole) {
            return res
                .status(401)
                .send({ message: "Admin Permission Required" });
        }
        // res.status(200).json({ message: adminRole });
        next();
    } catch (error) {
        res.status(401).send({ message: "Please authenticate" });
    }
};

module.exports = adminMiddleware;
