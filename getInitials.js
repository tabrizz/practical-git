// "for your information" -> "fyi"
function getInitials(name) {
	return name.split(' ')
		.map(word => word.charAt(0).toUpperCase())
		.join();
}
