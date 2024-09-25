import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={{
                //     backgroundColor: "#FFA001",
                //     borderRadius: 12,
                //     minHeight: 62,
                //     display: "flex",
                //     justifyContent: "center",
                //     alignItems: "center",
                //     flexDirection: "row",
                //     marginTop: 20,
                width: "100%"
            }}

            disabled={isLoading}
        >
            <View className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center w-full  ${containerStyles} ${isLoading ? "opacity-50" : ""
                }`}>
                <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
                    {title}
                </Text>

            </View>

            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;