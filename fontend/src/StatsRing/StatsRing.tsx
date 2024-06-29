import { RingProgress, Text, SimpleGrid, Paper, Center, Group, Container, rem } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};


export interface StatsRingProps {
  deviation: number;
}

export function StatsRing({ deviation }: StatsRingProps) {
  let data = [
    // TODO: Add data here!
  { label: 'Final Score', stats: '456,578', progress: 65, color: 'teal', icon: icons.up },
  { label: 'Estimated Calories Lost', stats: 'N/A', progress: 72, color: 'blue', icon: 'up' },
  //   {
  //     label: 'Orders',
  //     stats: '4,735',
  //     progress: 52,
  //     color: 'red',
  //     icon: 'down',
  //   },
  ];


  // total deviation: 1000 -> 100%
  const totalDeviation = deviation;
  console.log(totalDeviation);
  let scoreGrade = "YOU'RE ON FIRE";

  if (totalDeviation > 10000) {
    data[0].progress = 20
    scoreGrade = 'BRO YOU TWEAKIN'
  }
  else if (totalDeviation > 6000) {
    data[0].progress = 65
    scoreGrade = 'OK!'
  }
  else if (totalDeviation > 2000) {
    data[0].progress = 80
    scoreGrade = 'EXCELLENT'
  }
  else {
    data[0].progress = 95
  }

  data[0].stats = scoreGrade;

  const stats = data.map((stat) => {
    const Icon = stat.icon;
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return (
    <Container px="xl" pt="xl"> {/* Add padding to the sides */}
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{stats}</SimpleGrid>
    </Container>
  );
}