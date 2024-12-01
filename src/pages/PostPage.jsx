import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]); // Track selected images
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        const files = e.target.files;
        setImages(files);
        setSelectedImages([]); // Clear previous selection
    };

    const handleImageSelect = (index) => {
        if (selectedImages.includes(index)) {
            // Deselect image
            setSelectedImages(selectedImages.filter((i) => i !== index));
        } else {
            // Select image
            setSelectedImages([...selectedImages, index]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        for (let i = 0; i < images.length; i++) {
            formData.append("image", images[i]);
        }

        try {
            const response = await axios.post("http://localhost:5000/api/post", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${localStorage.getItem("Aryan")}`
                    },
                }
            );
            console.log("the reso", response)
            if (response.data.success) {
                toast.success("Post created successfully!");
                setTitle("");
                setDescription("");
                setImages([]);
                setSelectedImages([]);
            } else {
                toast.error("Failed to create post!");
            }
        } catch (error) {
            toast.error("Error: " + error.message);
        }

        setLoading(false);
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Upload Images (Max 5)</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        multiple
                        accept="image/*"
                        required
                        className="w-full"
                    />
                </div>

                <div className="mb-4 flex gap-4">
                    {Array.from(images).map((image, index) => (
                        <div
                            key={index}
                            className={`relative rounded-full w-16 h-16 overflow-hidden border-2 ${selectedImages.includes(index) ? "border-blue-500" : "border-gray-300"
                                }`}
                            onClick={() => handleImageSelect(index)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={URL.createObjectURL(image)}
                                alt={`image-${index}`}
                                className="object-cover w-full h-full"
                            />
                            {selectedImages.includes(index) && (
                                <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full"></div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 bg-blue-500 text-white rounded-lg ${loading ? "opacity-50" : ""}`}
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Create Post"}
                </button>
            </form>
        </div>
    );
};

export default PostPage;
