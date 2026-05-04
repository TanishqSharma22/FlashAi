import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
    try {
        const { userId, has } = await req.auth();
        const hasPremiumPlan = await has({ plan: 'premium' });

        if (hasPremiumPlan) {
            req.free_usage = 0;
        } else {
            const user = await clerkClient.users.getUser(userId);
            req.free_usage = user.privateMetadata.free_usage ?? 0;
            if (!user.privateMetadata.free_usage) {
                await clerkClient.users.updateUserMetadata(userId, {
                    privateMetadata: { free_usage: 0 }
                });
            }
        }

        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next();

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}