import sql from "../configs/db.js";

export const getUserCreations = async (req, res) => {
    try {
        const { userId } = req.auth();

        const creations = await sql`
            SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC
        `;

        res.json({ success: true, creations });
    } catch (error) {
        // It's better to log the error for debugging and send a 500 status code
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while fetching user creations." });
    }
};

export const getPublishedCreations = async (req, res) => {
    try {
        const creations = await sql`
            SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC
        `;

        res.json({ success: true, creations });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while fetching published creations." });
    }
};


export const toggleLikeCreations = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { id } = req.body;

        const [creation] = await sql`SELECT * FROM creations WHERE id = ${id}`;
        
        // Use an 'if' statement for the check, not 'id'
        if (!creation) {
            return res.status(404).json({ success: false, message: "Creation not found" });
        }

        // The column name is `likes`, not `Likes`
        const currentLikes = creation.likes || []; // Ensure it's an array, handle null/undefined
        const userIdStr = userId.toString();
        let updatedLikes;
        let message;

        // Check if the user ID is already in the likes array
        if (currentLikes.includes(userIdStr)) {
            updatedLikes = currentLikes.filter((user) => user !== userIdStr);
            message = 'Creation Unliked';
        } else {
            updatedLikes = [...currentLikes, userIdStr];
            message = 'Creation Liked';
        }
        
        // This line has a syntax error and is not the correct way to format an array for PostgreSQL.
        // Instead of constructing a string, pass the array directly to the SQL query.
        // The `sql` template literal handles the conversion to a PostgreSQL array type.
        await sql`
            UPDATE creations 
            SET likes = ${updatedLikes} 
            WHERE id = ${id}
        `;

        res.json({ success: true, message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while toggling the like." });
    }
};