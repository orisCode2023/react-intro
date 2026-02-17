export async function createComplaintService(complaint) {
    return { ...complaint, createdAt:new Date().toISOString()
    };
}


