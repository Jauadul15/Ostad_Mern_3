const Book = require("../models/book");

exports.bookCreation=async (req,res)=>{
    try{
        const{title,author,description}=req.body;
        const bookData=await new Book({
            title,author,description
        }).save();
        res.status(200).json({
            success:true,
            Message:"Book Details Created Successfully",
            date:bookData
        });

    }catch (err) {
        res.status(404).json({
            error:"Something Went wrong"
        })
    }
};


exports.SearchAllBooks=async (req,res)=>{
    try {
        const AllBook=await Book.find();
        res.status(200).json({
            success:true,
            message:"Showing All books Successfully",
            date:AllBook
        });

    }catch (err) {
        res.status(404).json({
            error:err.error
        });
    };
};

exports.singleBookFind=async (req,res)=>{
    try {
        const {id}=req.params;
        const singleBook=await Book.findOne({_id:id});
        res.status(200).json({
            success:true,
            message:"Find by Id with a single book successful",
            date:singleBook
        })
    }catch (err) {
        res.status(404).json({
            error:"cant find internal error"
        })
    }
}
exports.singleBookUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, description } = req.body;

        const singleBookUpdate = await Book.findByIdAndUpdate(
            id,
            {
                title,
                author,
                description,
            },
            { new: true }
        );

        if (!singleBookUpdate) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }

        const updatedBook = await Book.findById(singleBookUpdate._id);

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: "Updated book not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Single book update done",
            data: updatedBook,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

exports.singleBookDelete = async(req,res)=>{
    try {
        const {id} = req.params;
        const singleBookDelete = await Book.findByIdAndDelete({ _id: id });
        res.status(200).json(
            {
                success: true,
                message:"single book delete done",
                Data:singleBookDelete
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                error:error.message
            }
        )
    }
};