import {
  IconNumber11Small,
  IconNumber12Small,
  IconNumber13Small,
  IconNumber14Small,
  IconNumber15Small,
  IconNumber16Small,
  IconNumber17Small,
  IconNumber18Small,
  IconNumber19Small,
  IconNumber20Small,
} from '@tabler/icons-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';

export function CardsWithBulletsCollection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <IconNumber11Small className="h-6 w-6 text-blue-500" />
          <CardTitle>Suspendisse semper</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <IconNumber12Small className="h-4 w-4 shrink-0 text-green-500" />
            <span>Suspendisse semper</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <IconNumber13Small className="h-4 w-4 shrink-0 text-green-500" />
            <span>Proin rhoncus sagittis lacus</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <IconNumber14Small className="h-6 w-6 text-green-500" />
          <CardTitle>Vitae pulvinar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <IconNumber15Small className="h-4 w-4 shrink-0 text-green-500" />
            <span>Praesent tempor sagittis laoreet</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <IconNumber16Small className="h-4 w-4 shrink-0 text-yellow-500" />
            <span>Duis lorem augue</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <IconNumber17Small className="h-6 w-6 text-purple-500" />
          <CardTitle>Nullam lacinia eleifend molestie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <IconNumber18Small className="h-4 w-4 shrink-0 text-green-500" />
            <span>Integer fermentum dignissim</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <IconNumber19Small className="h-4 w-4 shrink-0 text-yellow-500" />
            <span>Mauris felis nibh</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <IconNumber20Small className="h-4 w-4 shrink-0 text-yellow-500" />
            <span>Nullam ligula ante, malesuada nec libero</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
