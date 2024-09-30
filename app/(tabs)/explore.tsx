import DownloadPicture from '@/components/DownloadPicture';
import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function () {
	const [pictureOpen, setpictureOpen] = useState(false)

	return (
		<SafeAreaView style={{
			flex: 1
		}}>
			<View style={{
				flex: 1
			}}>
				<Text>this is explore page</Text>
				<Button title='open bottom sheet' onPress={() => {
					setpictureOpen(true)
				}}></Button>
				{
					pictureOpen && <DownloadPicture onClose={()=>setpictureOpen(false)} />
				}
			</View>
		</SafeAreaView>
	);
}