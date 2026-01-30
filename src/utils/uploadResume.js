import API_BASE_URL from '../config';

/**
 * Uploads a resume file to the backend for analysis.
 * @param {File} file - The resume file (PDF/DOCX)
 * @returns {Promise<Object>} - The analysis result from the backend
 */
export async function uploadAndAnalyzeResume(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`${API_BASE_URL}/api/resume/analyze`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            let msg = errorData.message || 'Failed to analyze resume';
            if (errorData.error || errorData.detail) {
                msg += ` (Details: ${errorData.detail || errorData.error})`;
            }
            throw new Error(msg);
        }

        return await response.json();
    } catch (error) {
        console.error('Resume upload error:', error);
        throw error;
    }
}
