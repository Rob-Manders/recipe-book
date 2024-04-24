export default function useIdentifier(length: number): string {
	let id = ''

	let i = 0
	while (i < length) {
		i += 1

		const charCode = Math.round(Math.random() * 25) + 97

		id = id + String.fromCharCode(charCode)
	}

	return id
}
