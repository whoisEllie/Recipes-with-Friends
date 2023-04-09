import dotenv from 'dotenv'

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
}

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') =>{

	dotenv.config()
	let { URL } = process.env

	return `${URL}/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}}`;
}
