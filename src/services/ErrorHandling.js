export const createFormOneErrorHandler = (formDatas) => {
    const { jobTitle, companyName, industry, location, remoteType } = formDatas;
    const createFormOneError = {};
    if (!jobTitle.trim()) {
        createFormOneError.jobTitle = 'Job title is required';
    }
    if (!companyName.trim()) {
        createFormOneError.companyName = 'Company name is required';
    }
    if (!industry.trim()) {
        createFormOneError.industry = 'Industry is required';
    }
    if (!location.trim()) {
        createFormOneError.location = 'Location is required';
    }
    if (!remoteType.trim()) {
        createFormOneError.remoteType = 'remoteType is required';
    }

    return createFormOneError;
};

export const createFormTwoErrorHandler = (createFormTwoDatas, selectedRadio) => {
    const createFormTwoError = {};

    const trimStringProperties = (data) => {
        for (const key in data) {
            if (data.hasOwnProperty(key) && typeof data[key] === 'string') {
                data[key] = data[key].trim();
            }
        }
    };

    trimStringProperties(createFormTwoDatas);

    if (!createFormTwoDatas.experienceMinimun) {
        createFormTwoError.experienceMinimun = 'Minimum experience is required';
    }

    if (!createFormTwoDatas.experienceMaximum) {
        createFormTwoError.experienceMaximum = 'Maximum experience is required';
    }

    if (!createFormTwoDatas.salaryMinimun) {
        createFormTwoError.salaryMinimun = 'Minimum salary is required';
    }

    if (!createFormTwoDatas.salaryMaximum) {
        createFormTwoError.salaryMaximum = 'Maximum salary is required';
    }

    if (!createFormTwoDatas.totalEmployee) {
        createFormTwoError.totalEmployee = 'Total employee is required';
    }

    if (!selectedRadio) {
        createFormTwoError.radio = 'Please select an option';
    }

    return createFormTwoError;
};
