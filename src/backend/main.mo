import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contactMessages = Map.empty<Text, ContactMessage>();

  public query ({ caller }) func messageExists(email : Text) : async Bool {
    contactMessages.containsKey(email);
  };

  public shared ({ caller }) func validateEmail(email : Text) : async () {
    if (not email.contains(#char '@')) {
      Runtime.trap("Email must contain '@'.");
    };
    let invalidSymbols = [",", ";", "%", "$", "<", ">"];
    for (symbol in invalidSymbols.values()) {
      if (email.contains(#text symbol)) {
        Runtime.trap("Email cannot contain any of ',', ';', '%', '$', '<', '>'.");
      };
    };
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    await validateEmail(email);

    let contactMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactMessages.add(email, contactMessage);
  };

  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    contactMessages.values().toArray();
  };

  public query ({ caller }) func getMessagesByUser(email : Text) : async ContactMessage {
    switch (contactMessages.get(email)) {
      case (null) { Runtime.trap("No messages found for this user") };
      case (?message) { message };
    };
  };
};
