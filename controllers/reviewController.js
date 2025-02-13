export const createReview = async (req, res) => {
    try {
        const { rating, comment, gameId } = req.body;
        const userId = req.user.id;

        // Ensure rating is between 1 and 5
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be between 1 and 5" });
        }

        const review = await prisma.review.create({
            data: { rating, comment, gameId, userId },
        });

        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
