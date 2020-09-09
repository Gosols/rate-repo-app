import React from "react";
import { View, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = {
  container: {
    margin: 10,
  },

  title: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  desc: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textSecondary,
    flex: 1,
  },
  lang: {
    color: "white",
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  detail: {
    margin: 5,
    marginHorizontal: 10,
    flexDirection: "column",
    alignItems: "center",
  },
};

export default function RepositoryItem({ obj }) {
  console.log(obj);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "stretch",
            marginRight: 20,
            borderRadius: 10,
          }}
          source={{ uri: obj.ownerAvatarUrl }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.title}>{obj.fullName}</Text>
          <Text style={styles.desc}>{obj.description}</Text>
          <Text style={styles.lang}>{obj.language}</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={styles.detail}>
          <Text fontWeight="bold">{obj.stargazersCount}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.detail}>
          <Text fontWeight="bold">{obj.forksCount}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.detail}>
          <Text fontWeight="bold">{obj.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.detail}>
          <Text fontWeight="bold">{obj.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
}
