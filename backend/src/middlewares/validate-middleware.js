const validate = (schma) => async (req, res, next) => {
    try {
        const parseBody = await schma.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        res.status(400).json({ message: err.errors[0].message });
        // console.log(err.errors);
    }
};

module.exports = validate;
