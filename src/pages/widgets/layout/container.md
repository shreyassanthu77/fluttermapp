---
title: Container
layout: ../../../components/widgets/WidgetsLayout.astro
---

```dart
import 'package:flutter/material.dart';

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      height: 200,
      color: Colors.red,
      child: const Text('Hello World'),
    );
  }
}
```