

const signUp = async (request, response) => {
    try {
        console.log("🚀 ~ signUp ~ request:", request.body)
        
    } catch (error) {
        console.log("🚀 ~ signUp ~ error:", error)
        
    }
};

module.exports = {
    signUp,
}