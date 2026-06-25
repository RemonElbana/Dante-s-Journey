const COLLECTION_KEY = "claimedCharacters";

/* ========================= */
/* Get Collection */
/* ========================= */

function getCollection() {

    return JSON.parse(
        localStorage.getItem(COLLECTION_KEY)
    ) || [];

}

/* ========================= */
/* Save Collection */
/* ========================= */

function saveCollection(collection) {

    localStorage.setItem(
        COLLECTION_KEY,
        JSON.stringify(collection)
    );

}

/* ========================= */
/* Add Character */
/* ========================= */

function claimCharacter(id) {

    const collection = getCollection();

    if (!collection.includes(id)) {

        collection.push(id);

        saveCollection(collection);

        return true;

    }

    return false;

}

/* ========================= */
/* Check */
/* ========================= */

function hasCharacter(id) {

    return getCollection().includes(id);

}

/* ========================= */
/* Count */
/* ========================= */

function collectionCount() {

    return getCollection().length;

}