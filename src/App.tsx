
import { NavigationContainer } from "@react-navigation/native"
import { NavigatorStack } from "./presentation/navigations/NavigatorStack"

export const App = () => {
  return (
    <NavigationContainer>
      <NavigatorStack />
    </NavigationContainer>
  )
}
