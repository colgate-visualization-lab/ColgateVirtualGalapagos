import React from "react";
import { Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import { MapButton } from "../atomic-design/molecules/MapButton/MapButton";
import Page from "../atomic-design/templates/Page";


export default function BackpackTesting(){
    return (
        <Page transition="none" color="bg-white">
            <div className="fixed top-2 right-2 z-40">
                <Button
                size="lg"
                variant="backpack"
                >
            <Text text="Click to open the backpack" color="text-dark" />
                </Button>
            </div>
        </Page>
            
        
    );
}
