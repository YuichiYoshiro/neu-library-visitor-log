// visitorTest.js
import { db } from './firebase.js';
import { collection, addDoc, getDocs } from "firebase/firestore";

async function testFirebase() {
  try {
    // Add a test visitor
    await addDoc(collection(db, "visitors"), {
      name: "Test Visitor",
      email: "test@example.com",
      checkInTime: new Date(),
      purpose: "testing"
    });
    console.log("✅ Test visitor added");

    // Read all visitors
    const snapshot = await getDocs(collection(db, "visitors"));
    console.log("📋 Current visitors:");
    snapshot.forEach(doc => console.log(doc.id, doc.data()));
  } catch (error) {
    console.error("❌ Firebase test failed:", error);
  }
}

// Run the test
testFirebase();
