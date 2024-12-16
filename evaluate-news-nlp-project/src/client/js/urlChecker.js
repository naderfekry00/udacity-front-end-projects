function isValidURL(url) {
    // Define a regular expression for URL validation
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/i;

    // Test the URL against the pattern
    return urlPattern.test(url) ? 1 : 0;
}

export{ isValidURL };