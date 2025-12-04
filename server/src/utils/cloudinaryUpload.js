import cloudinary from "../lib/cloudinary.js";

export const uploadToCloudinary = (buffer, folder, resourceType = "image") => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: resourceType,   // must be "video" for mp4
                chunk_size: 10 * 1024 * 1024,  // 10MB chunks (required for video)
                timeout: 600000,               // 10 minutes
            },
            (error, result) => {
                if (error) {
                    console.error("Cloudinary Upload Error:", error);
                    return reject(error);
                }
                resolve(result.secure_url);
            }
        ).end(buffer);
    });
};
